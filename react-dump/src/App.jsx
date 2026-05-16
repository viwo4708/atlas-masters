import './App.css'

import Card from 'react-bootstrap/Card';
import { useState, useEffect} from 'react';

function BasicCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/9/9d/Zara_Larsson_-_Midnight_Sun.png" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function BoredActivity() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then(response => response.json())
      .then(data => {
        setActivity(data);
      });
  }, []);

  return (
    <div>
      <h1>Activity</h1>

        {activity && (
        <div>
          <p>
            Activity: {activity.activity}
          </p>
          <p>
            Type: {activity.type}
          </p>
          <p>
            Participants: {activity.participants}
          </p>
          <p>
            Price: {activity.price}
          </p>
          <p>
            Accessibility: {activity.accessibility}
          </p>
        </div>
      )}

    </div>
  );
}

function App() {

  return (
    <>
      <h1>Bootstrap Cards</h1>
      <div id="testcards">
        <BasicCard text="it's the midnight sun kissed" title="ZARA LARSSON"/>
        <BasicCard text="skin under the red sky" title="ZARA LARSSON"/>
        <BasicCard text="laying on your chest like this" title="ZARA LARSSON"/>
        <BasicCard text="hold me like the petals in your hand" title="ZARA LARSSON"/>
      </div>

      {/* api call practice */}

      <BoredActivity />




    </>
  )
}

export default App
