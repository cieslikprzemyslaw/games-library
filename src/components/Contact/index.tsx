import React from "react";
import { ContactWrapper, TextSection, Title, Text, Star } from "./styles";
import {
  Form,
  Subtitle,
  ElementsWrapper,
  Label,
  Input,
  Textarea,
  Button,
} from "../../assests/GlobalStyles/globalStylesItems";

const index = () => {
  return (
    <ContactWrapper>
      <TextSection>
        <Title>get in touch</Title>
        <Text>
          Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast
          reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs
          boom gunwalls booty jury mast fore
        </Text>
      </TextSection>
      <Form>
        <Subtitle>Contact Form</Subtitle>
        <ElementsWrapper>
          <Label htmlFor="name">
            Name<Star>*</Star>
          </Label>
          <Input type="text" id="name" />
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="email">
            Email Address<Star>*</Star>
          </Label>
          <Input type="text" id="email" />
        </ElementsWrapper>
        <ElementsWrapper>
          <Label htmlFor="message">
            Message<Star>*</Star>
          </Label>
          <Textarea id="message" rows={4} cols={50}></Textarea>
        </ElementsWrapper>
        {/* Create Button with styles component in globalStylesItems */}
        <Button>Send</Button>
      </Form>
    </ContactWrapper>
  );
};

export default index;
