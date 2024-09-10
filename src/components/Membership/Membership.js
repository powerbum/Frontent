import React from "react"
import { Link } from "gatsby"

const MembershipLevels = () => {
  return (
      <div className="membership-levels-area ptb-100">
        <div className="container">

        <div className="section-title">
            <h2>Sprendimai</h2>
            <p>
            Štai mūsų sprendimai ir planai: maksimaliai padidinkite pelną ir sumažinkite išlaidas 
            lengvai su mūsų namų baterijų prekybos sprendimu, parduodami sukauptą energiją, 
            kai kainos yra aukščiausios, ir pirkdami, kai jos yra žemiausios.
            </p>
          </div>
          
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th aria-hidden="true"></th>
                  <th>
                    <span className="title">Mini</span>
                    <span className="desc">6kW Saules Elektrine</span>
                    <span className="desc">3kw Baterija</span>
                  </th>
                  <th>
                    <span className="title">Medi</span>
                    <span className="desc">10kW Saules Elektrine</span>
                    <span className="desc">5kw Baterija</span>
                  </th>
                  <th>
                    <span className="title">Maxi</span>
                    <span className="desc">20kW Saules Elektrine</span>
                    <span className="desc">10kw Baterija</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Kaina</td>
                  <td>5000Eur</td>
                  <td>1000Eur</td>
                  <td>15000Eur</td>
                </tr>

                <tr>
                  <td>Kaina su APVA parama</td>
                  <td>2500Eur</td>
                  <td>5000Eur</td>
                  <td>7500Eur</td>
                </tr>

                <tr>
                  <td>Sugeneruota BE algoritko per metus</td>
                  <td>1000Eur</td>
                  <td>2000Eur</td>
                  <td>4000Eur</td>
                </tr>

                <tr>
                  <td>Sugeneruota SU algoritko per metus</td>
                  <td>1700Eur</td>
                  <td>3400Eur</td>
                  <td>6800Eur</td>
                </tr>

                <tr>
                  <td>Gamintojo Garantija</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>


                {/* <tr>
                  <td>Deep Learning and Artificial Intelligence</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>
 */}


                <tr>
                  <td></td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default MembershipLevels
