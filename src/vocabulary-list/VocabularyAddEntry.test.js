import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import sinon from "sinon";

import VocabularyAddEntry from "./VocabularyAddEntry";

test("add button disabled for one input", () => {
  const onAddEntry = sinon.spy();
  const wrapper = shallow(
    <VocabularyAddEntry onAddEntry={onAddEntry}></VocabularyAddEntry>
  );

  const wordInput = wrapper.find('input[name="word"]');
  const translInput = wrapper.find('input[name="translation"]');

  wordInput.simulate("change", { target: { value: "Hello" } });

  const button = wrapper.find('button[type="submit"]');

  expect(button.prop("disabled")).toBe(true);
});

test("add button enabled for both inputs present", () => {
  const onAddEntry = sinon.spy();
  const wrapper = shallow(
    <VocabularyAddEntry onAddEntry={onAddEntry}></VocabularyAddEntry>
  );

  const wordInput = wrapper.find('input[name="word"]');
  const translInput = wrapper.find('input[name="translation"]');

  wordInput.simulate("change", { target: { value: "Hello" } });
  translInput.simulate("change", { target: { value: "Cześć" } });

  const button = wrapper.find('button[type="submit"]');

  expect(button.prop("disabled")).toBe(false);
});
