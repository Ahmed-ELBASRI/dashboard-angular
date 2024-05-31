import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  planPaiementId!: number;
  sessionId: string | null = null;
  paymentSuccess: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.planPaiementId = this.route.snapshot.params['id'];
  }

  async createCheckoutSession(): Promise<void> {
    if (!this.planPaiementId) {
      console.error('Plan payment ID is not set');
      return;
    }

    console.log('Creating checkout session for planPaiementId:', this.planPaiementId);

    const url = `${environment.apiUrl}/api/Paiement/create-checkout-session`;
    const body = { planPaiementId: this.planPaiementId, currency: 'usd' };

    try {
      const response = await lastValueFrom(this.http.post<{ sessionId: string }>(url, body));
      console.log('Received response from backend:', response);
      if (response.sessionId) {
        this.sessionId = response.sessionId;
        const stripe = await loadStripe(environment.stripePublishableKey);
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({ sessionId: response.sessionId });
          if (error) {
            console.error('Error redirecting to checkout', error);
          } else {
            // Payment succeeded, update paymentSuccess variable
            this.paymentSuccess = true;

          }
        } else {
          console.error('Stripe failed to load');
        }
      } else {
        console.error('No sessionId received from backend');
      }
    } catch (error) {
      console.error('Error creating checkout session', error);
      if (error instanceof HttpErrorResponse) {
        console.error('Backend returned status code:', error.status);
        console.error('Response body:', error.message);
      }
    }
  }
}
