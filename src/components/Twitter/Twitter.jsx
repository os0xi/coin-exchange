import React, { useState } from "react";

import {
  Container,
  Button,
  Card,
  Modal,
  styled,
  Avatar,
  Text,
} from "@nextui-org/react";
import axios from "axios";

export default function Twitter(props) {
  const [visible, setVisible] = React.useState(false);
  const [coinTweets, setcoinTweets] = useState([]);
  const handler = () => {
    getTweets(props.id);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const getTweets = async () => {
    let tweets = await axios.get(
      `https://api.coinpaprika.com/v1/coins/${props.id}/twitter`
    );
    setcoinTweets(tweets.data);
  };
  return (
    <>
      <Button onClick={handler}>Twitter</Button>
      <Modal
        color="secondary"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        width="100vw"
        onClose={closeHandler}
      >
        <Modal.Body>
          {coinTweets.map((tweet) => {
            return (
              <div key={tweet.date}>
                <Card
                  css={{
                    margin: "1rem",
                  }}
                >
                  <Container display="flex" direction="row">
                    <Avatar squared src={tweet.user_image_link} />
                    {tweet.user_name}
                  </Container>

                  <Container>
                    <Text size="1.5rem">{tweet.status}</Text>
                  </Container>
                  <Container>{tweet.date.slice(0, 10)}</Container>
                </Card>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}
