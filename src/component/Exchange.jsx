import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchange();
  }, []);

  if(error) {
    return <Error />
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"} >
            {exchanges.map((i) => (
              <ExchangeCard
                name={i.name}
                url={i.url}
                image={i.image}
                rank={i.trust_score_rank}
                key={i.id}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, url, image, rank }) => (
  <a href={url} target={"blank"}>
    <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{
      "&:hover": {
        transform: "scale(1.1)"
      }
    }} >
      <Image
        src={image}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1} >{name}</Text>
    </VStack>
  </a>
);

export default Exchange;
