import React from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function PropertyCard(props) {
  const { title, image } = props;
  console.log(title, image);

  return (
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Text>{title}</Text>
              <Text note>Lugar</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{ uri: image }}
              style={{ height: 200, width: "100%", flex: 1 }}
            />
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>RD - 1000,000</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <MaterialCommunityIcons size={20}  color="#87838B" name="bed-king-outline" />
            </Button>
          </Left>
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <MaterialCommunityIcons size={20}  color="#87838B" name="shower" />
            </Button>
          </Left>
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}> 
            {/* arrow-expand-all */}
              <MaterialCommunityIcons size={20}  color="#87838B" name="ruler-square-compass" />
            </Button>
          </Left>
           <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <MaterialCommunityIcons size={20}  color="#87838B" name="heart-outline" />
            </Button>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
}
