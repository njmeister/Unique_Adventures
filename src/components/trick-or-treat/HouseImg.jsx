import "../css/trickOrTreatGame.css";

export default function HouseImg({ houseColor, roofColor }) {
    return (
        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1253.48 997.9" preserveAspectRatio="xMidYMid meet">
          <g id="Layer_1-2" data-name="Layer_1">
            <g>
              <rect className="cls-1" x="497.63" y="960.09" width="258.21" height="35.82"/>
              <rect className="cls-10" x="497.63" y="978" width="258.21" height="17.91"/>
            </g>
            <polygon style={{ fill: houseColor }} points="132.49 330.24 132.49 997.4 496.67 997.4 496.67 536.21 754.88 536.21 754.88 997.4 1122.04 997.4 1122.04 536.21 1122.04 330.24 132.49 330.24"/>
            <g>
              <rect className="cls-4" x="855.84" y="545.59" width="189.55" height="256.72"/>
              <rect className="cls-7" x="948.41" y="579.18" width="4.41" height="189.55" transform="translate(1624.57 -276.67) rotate(90)"/>
              <rect className="cls-6" x="947.63" y="545.59" width="5.97" height="256.72"/>
              <rect className="cls-5" x="834.95" y="794.29" width="231.34" height="16.04"/>
            </g>
            <g>
              <rect className="cls-4" x="219.74" y="545.59" width="189.55" height="256.72"/>
              <rect className="cls-7" x="312.31" y="579.18" width="4.41" height="189.55" transform="translate(988.46 359.44) rotate(90)"/>
              <rect className="cls-6" x="311.53" y="545.59" width="5.97" height="256.72"/>
              <rect className="cls-5" x="198.84" y="794.29" width="231.34" height="16.04"/>
            </g>
            <g>
              <polygon style={{ fill: roofColor }} points="1.74 400.6 1251.74 400.6 626.74 .6 1.74 400.6"/>
              <polygon className="cls-11" points="626.74 86.52 627.79 86.52 740.96 191.57 740.96 356.14 513.57 356.14 513.57 191.57 626.74 86.52"/>
              <path className="cls-4" d="M626.74,152.66c-30.96,0-56.06,25.1-56.06,56.06v147.42h112.11v-147.42c0-30.96-25.1-56.06-56.06-56.06Z"/>
              <line className="cls-8" x1="626.74" y1="152.66" x2="626.74" y2="356.14"/>
              <line className="cls-8" x1="570.68" y1="261.8" x2="682.8" y2="261.8"/>
              <line className="cls-9" x1="503.1" y1="197.27" x2="627.79" y2="86.52"/>
              <line className="cls-9" x1="751.39" y1="197.32" x2="626.74" y2="86.52"/>
            </g>
          </g>
        </svg>
    );
}