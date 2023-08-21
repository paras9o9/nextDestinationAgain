import React from 'react'

const Priceing = () => {
  return (
    <div>
      <section className='priceing-section'>
        <div className='priceing-title'>
          <h2>Our Price</h2>
        </div>
        <div className="priceing-content">
          <div className='priceing-table-container'>
            <table className='pricing-table'>
              <tr>
                <th>Packages Features</th>
                <th>Basic Package</th>
                <th>Standard Package</th>
                <th>Premuim Package</th>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Duration</td>
                <td>3 days / 2 nights </td>
                <td>5 days / 4 nights</td>
                <td>7 days / 6 nights</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Accommodation</td>
                <td>3-star hotels</td>
                <td>4-star hotels</td>
                <td>5-star hotels</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Meals Included</td>
                <td>Breakfast</td>
                <td>Breakfast, Lunch</td>
                <td>All meals</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Guided Tours</td>
                <td>2 half-day tours</td>
                <td>3 full-day tours</td>
                <td>Daily tours</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Airpot Transfer</td>
                <td>One-way</td>
                <td>Round-trip</td>
                <td>Round-trip</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Transportation</td>
                <td>Public Transport</td>
                <td>Private Van</td>
                <td>Private Car</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Activites</td>
                <td>1 included</td>
                <td>3 included</td>
                <td>Customized Plan</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Language Support</td>
                <td>English Only</td>
                <td>Bilingual Guides</td>
                <td>Personal Guide</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: "pink" }}>Price per Person</td>
                <td>$499</td>
                <td>$799</td>
                <td>$1299</td>
              </tr>
            </table>
          </div>
          <div className='destiantion-page'>
            <button className='tour-link'>
              Explore Destinations
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Priceing