import React from "react";
import { searchURL } from "../../constants/imagesURL.ts/searchURL";
import {
  BackGround,
  SearchContainer,
  Searchbox,
  Title,
  InputText,
  SearchIcon,
} from "./styles";

export default function SearchBox() {
  return (
    <BackGround>
      <SearchContainer>
        <Title>Epicure works with the top cheif restaurant in Tel Aviv</Title>
        <Searchbox>
          <SearchIcon src={searchURL} alt="search icon" />
          <InputText
            type="text"
            id="search"
            placeholder="Search for restaurant cuisine, chef"
          />
        </Searchbox>
      </SearchContainer>
    </BackGround>
  );
}
