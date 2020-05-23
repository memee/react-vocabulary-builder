import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import sinon from 'sinon';

import VocabularyAddEntry from "./VocabularyAddEntry";

test("add button disabled for one input", () => {
    const onSubmit = sinon.spy();
    const wrapper = shallow((<VocabularyAddEntry></VocabularyAddEntry>))
})
