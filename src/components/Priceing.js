import React from "react";
import { StyledPricing } from "./styles/Pricing.styled";
import { StyledButton } from "./styles/Button.styled";

const Priceing = () => {
  return (
    <StyledPricing>
      <section className="pricing-section">
        <div className="pricing-title">
          <h2>Our Price</h2>
        </div>
        <div className="pricing-content">
          <div className="pricing-table-container">
            <table>
              <tr>
                <th>Packages Features</th>
                <th>Basic Package</th>
                <th>Standard Package</th>
                <th>Premuim Package</th>
              </tr>
              <tr>
                <td data-cell="Package Feature">Duration</td>
                <td data-cell="Basic Package">3 days / 2 nights </td>
                <td data-cell="Standard Package">5 days / 4 nights</td>
                <td data-cell="Premuim Package">7 days / 6 nights</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Accommodation</td>
                <td data-cell="Basic Package">3-star hotels</td>
                <td data-cell="Standard Package">4-star hotels</td>
                <td data-cell="Premium Package">5-star hotels</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Meals Included</td>
                <td data-cell="Basic Package">Breakfast</td>
                <td data-cell="Standard Package">Breakfast, Lunch</td>
                <td data-cell="Premium Package">All meals</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Guided Tours</td>
                <td data-cell="Basic Package">2 half-day tours</td>
                <td data-cell="Standard Package">3 full-day tours</td>
                <td data-cell="Premium Package">Daily tours</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Airpot Transfer</td>
                <td data-cell="Basic Package">One-way</td>
                <td data-cell="Standard Package">Round-trip</td>
                <td data-cell="Preimum Package">Round-trip</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Transportation</td>
                <td data-cell="Basic Package">Public Transport</td>
                <td data-cell="Standard Package">Private Van</td>
                <td data-cell="Preimum Package">Private Car</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Activites</td>
                <td data-cell="Basic Package">1 included</td>
                <td data-cell="Standard Package">3 included</td>
                <td data-cell="Preimum Package">Customized Plan</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Language Support</td>
                <td data-cell="Basic Package">English Only</td>
                <td data-cell="Standard Package">Bilingual Guides</td>
                <td data-cell="Preimum Package">Personal Guide</td>
              </tr>
              <tr>
                <td data-cell="Package Feature">Price per Person</td>
                <td dat-cell="Basic Package">$499</td>
                <td data-cell="Standard Package">$799</td>
                <td data-cell="Preimum Package">$1299</td>
              </tr>
            </table>
          </div>
          <div className="destiantion-page">
            <div className="destination-link-container">
              <StyledButton>
                <a href="#" className="link" varient="Pricing">
                  Explore
                </a>
              </StyledButton>
              <StyledButton>
                <a href="#" className="link" varient="Pricing">
                  Gallery
                </a>
              </StyledButton>
            </div>
          </div>
        </div>
      </section>
    </StyledPricing>
  );
};

export default Priceing;
