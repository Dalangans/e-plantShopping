import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrderData(JSON.parse(lastOrder));
    } else {
      navigate('/cart');
    }
  }, [navigate]);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        {/* Success Message */}
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase at Paradise Nursery</p>
        </div>

        {/* Order Number */}
        <div className="order-number-section">
          <p>Your Order Number:</p>
          <h2>{orderData.orderId}</h2>
          <p className="order-date">{orderData.orderDate}</p>
        </div>

        {/* Order Details */}
        <div className="order-details-grid">
          {/* Shipping Details */}
          <div className="detail-card">
            <h3>📦 Shipping Address</h3>
            <div className="detail-content">
              <p>
                <strong>{orderData.customer.fullName}</strong>
              </p>
              <p>{orderData.customer.address}</p>
              <p>
                {orderData.customer.city}, {orderData.customer.zipCode}
              </p>
              <p>📞 {orderData.customer.phone}</p>
              <p>📧 {orderData.customer.email}</p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="detail-card">
            <h3>💳 Payment Method</h3>
            <div className="detail-content">
              <p>Card ending in ****{orderData.lastFourDigits}</p>
              <p className="payment-status">✓ Payment Successful</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="order-items-section">
          <h3>📋 Order Items</h3>
          <div className="items-table">
            <div className="table-header">
              <div className="col-product">Product</div>
              <div className="col-qty">Qty</div>
              <div className="col-price">Unit Price</div>
              <div className="col-total">Total</div>
            </div>

            {orderData.items.map((item) => (
              <div key={item.id} className="table-row">
                <div className="col-product">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </div>
                <div className="col-qty">{item.quantity}</div>
                <div className="col-price">${item.price.toFixed(2)}</div>
                <div className="col-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="summary-section">
          <div className="summary-box">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${orderData.totalAmount}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>${orderData.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps">
          <h3>📧 What's Next?</h3>
          <ul>
            <li>A confirmation email has been sent to {orderData.customer.email}</li>
            <li>Your plants will be carefully packaged and shipped within 2-3 business days</li>
            <li>You'll receive a tracking number via email</li>
            <li>Expected delivery: 5-7 business days</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button onClick={() => navigate('/')} className="home-btn">
            Back to Home
          </button>
          <button onClick={() => navigate('/plant')} className="shop-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
