import React from "react";
import { mount } from "enzyme";
import CardFront from "./CardFront";
import beerMockData from "../../beerMockData";

describe("CardFront component tests", () => {
  let wrapper;
  let mockBeer;
  
  beforeEach(() => {
    mockBeer = beerMockData[0];
    wrapper = mount(
      <CardFront name={mockBeer.name} abv={mockBeer.abv} tagline={mockBeer.tagline} image={mockBeer.image_url} />
    );
  });

  it("should include 2 sections", () => {
    expect(wrapper.find("section").length).toEqual(2);
  });

  it("should render the correct name", () => {
      expect(wrapper.find('h2').text()).toBe(mockBeer.name)
  })

  it("should render the correct tagline", () => {
      expect(wrapper.find('h4').text()).toBe(`"${mockBeer.tagline}"`)
  })

  it("should render the correct abv value", () => {
      expect(wrapper.find('.infoContainer__abv').text()).toBe(`ABV: ${mockBeer.abv}%`);
  })

  it("should render correct image href src", () => {
      expect(wrapper.find('img').prop('src')).toBe(mockBeer.image_url);
  })

});
