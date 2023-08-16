import {
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { City, Country } from "country-state-city";
import { useState } from "react";
import { myGray } from "../../colors";

const CountryCityDropdown = ({ isFilter }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const countryOptions = Country.getAllCountries().map((country) => (
    <option key={country.isoCode} value={country.isoCode}>
      {country.name}
    </option>
  ));

  const cities = selectedCountry
    ? City.getCitiesOfCountry(selectedCountry)
    : [];
  const cityOptions = cities.map((city) => (
    <option key={city.name} value={city.name}>
      {city.name}
    </option>
  ));

  return (
    <Flex gap={3} direction={isFilter === true ? "column" : "row"}>
      <Select
        required={!isFilter}
        border="1px"
        borderRadius="12px"
        borderColor={myGray}
        focusBorderColor="black"
        name="country"
        placeholder="Select a country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {countryOptions}
      </Select>
      <Select
        required={!isFilter}
        border="1px"
        borderRadius="12px"
        borderColor={myGray}
        name="city"
        placeholder="Select a city"
        focusBorderColor="black"
        value={selectedCity}
        onChange={handleCityChange}
        isDisabled={!selectedCountry}
      >
        {cityOptions}
      </Select>
    </Flex>
  );
};

function FormCell({ title, input_name, placeholder, isRequired, type }) {
  
  return (
    <Flex direction="column" gap={1} w="full">
      <Text fontSize="16px" color={myGray}>
        {title}
      </Text>
      <Input
        name={input_name}
        focusBorderColor={"black"}
        placeholder={placeholder}
        borderRadius="12px"
        border={"1px"}
        borderColor={myGray}
        type={type}
        required={isRequired}
      />
    </Flex>
  );
}

function FormQuestionCell({ title, input_name, placeholder, isRequired }) {
  return (
    <Flex direction="column" gap={1} w="full">
      <Text fontSize="16px" color={myGray}>
        {title}
      </Text>
      <Textarea
        name={input_name}
        focusBorderColor={"black"}
        placeholder={placeholder}
        borderRadius="12px"
        border={"1px"}
        borderColor={myGray}
        rows={5}
        resize="vertical"
        required={isRequired}
      />
    </Flex>
  );
}
function PhoneNumberCell() {
  return (
    <Flex gap={1} direction={"column"}>
    <Text>Phone Number</Text>
    <Grid gap={2} templateColumns={"repeat(4,1fr)"}>
      <GridItem colSpan={1}>
        <Select
          w="full"
          name="phoneCode"
          focusBorderColor={"black"}
          borderRadius="12px"
          border={"1px"}
          borderColor={myGray}
        >
          {Country.getAllCountries()
            .sort((a, b) => a.phonecode - b.phonecode)
            .map((country, index) => (
              <>
                <option key={index} value={country.phonecode}>
                  {country.phonecode} {country.flag}
                </option>
              </>
            ))}
        </Select>
      </GridItem>
      <GridItem colSpan={3}>
        <Input
          name={"phone"}
          focusBorderColor={"black"}
          placeholder={"Your Phone Number"}
          borderRadius="12px"
          border={"1px"}
          borderColor={myGray}
          w="full"
          type={"tel"}
          required={true}
        />
      </GridItem>
    </Grid>
    </Flex>
  );
}

export { CountryCityDropdown, FormCell, FormQuestionCell, PhoneNumberCell };
