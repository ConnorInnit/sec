import { 
  cardInfo 
} from './cardInfo';
import {
  handleLeftClick,
  handleRightClick
} from '../helperFunctions/pageNavigation';
import {
    useState
} from 'react';
import './cards.css';

export const Cards = () => {

    //cards stores the card information for each injection 
    const [cards, setCards] = useState(cardInfo());
    //current card holds the object key of the current selected card 
    const [currentCard, setCurrentCard] = useState(0);
    //holds the user string input
    const [userString, setUserString] = useState(null);
    //holds response from API
    const [response, setResponse] = useState(null);
    //holds the current route state safe/unsafe
    const [safeRoute, setSafeRoute] = useState();

    function handleSubmit(){
        let route;
        safeRoute === true
        ? route = cards[currentCard].fetchSafeRoute
        : route = cards[currentCard].fetchUnsafeRoute
        fetch(
            route,
            {
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(userString)
            }
        )
        .then((response) => {
            response.json();
        })
        .then((jsonResponse) => {
            setResponse(jsonResponse);
        })
    }

    return(
        <>
          <div
              className='navigationBanner'
          >
              <div
                  className='navigationButtons'
                  onClick={() => {
                    handleLeftClick(
                      setResponse, 
                      setUserString, 
                      setCurrentCard, 
                      currentCard,
                      cards.length
                    );
                  }}
              >
                  <h2>&lt;</h2>
              </div>
              <h2>
                  {
                      cards[currentCard].title
                      ?cards[currentCard].title
                      :''
                  }
              </h2>
              <div
                  className='navigationButtons'
                  onClick={() => {
                    handleRightClick(
                      setResponse, 
                      setUserString, 
                      setCurrentCard, 
                      currentCard,
                      cards.length
                    );
                  }}
              >
                  <h2>&gt;</h2>
              </div>
          </div>
            <div
                className='card'
            >
              <p>
                  {
                      cards[currentCard].description  
                      ?cards[currentCard].description
                      :''
                  }
              </p>
              <form
                  onSubmit={handleSubmit}
              >
                <input 
                    type='text' 
                    placeholder='Please Enter SQL Injection Here'
                    required={true}
                    onChange={(e) => {setUserString(e.target.value)}}
                    className="SQL-Input" //removed style from here and use it in cards.css
                />
                <br/>
                <button
                    className='inject-button'
                    onSubmit={handleSubmit} //may need to be onClick
                    
                    //we need two differnt class names as when editing css we need to be able to edit both the button AND the text
                    //i did the same for Toggle Also, just in case we decide to change something specific to the text only
                >
                    <span className="inject-button-text">Inject</span> 
                    </button> 
              </form>
              <div>
                  {
                      safeRoute
                      ?<h4>Protected Route</h4>
                      :<h4>Unprotected Route</h4>
                  }
              </div>
                  <button
                      className='toggle'
                      onClick={() => {
                        setSafeRoute(!safeRoute)
                      }}
                  ><span className="Toggle-button-text">Toggle Route</span> 
                  </button>
              <div
                  className='output'
              >
                  <h3>Output: 
                      {
                          response
                          ?response
                          :''
                      }
                  </h3>
              </div>
            </div>
        </>
    )
}