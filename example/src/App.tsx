import React, { useState, VFC } from 'react';
import styled from 'styled-components';

import { BodyComponent } from './reactComponentLib';
import { PartsInput } from './reactComponentLib/components/BodyComponent/BodyComponent';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: #e8e8e8;
  color: black;
`;

const exampleParams = {
  head: { selected: true },
  leftArm: { show: false },
};

export const App: VFC = () => {
  const [params, setParams] = useState<any>();
  const [bodyModel, setBodyModel] = useState<string>();

  const onChange = (parts: PartsInput) => console.log('Changed Parts:', parts);
  const onClick = (id: string) => console.log('Changed Id:', id);

  return (
    <div>
      <button onClick={() => setParams(exampleParams)}>Pass Params</button>
      <button onClick={() => setParams(null)}>Clear Params</button>
      <button onClick={() => setBodyModel('male')}>Male Model</button>
      <button onClick={() => setBodyModel('female')}>Female Model</button>
      {params ? (
        <StyledDiv>
          Showing with params {JSON.stringify(exampleParams, null, 2)}
          <BodyComponent partsInput={params} onChange={onChange} onClick={onClick} bodyModel={bodyModel} />
        </StyledDiv>
      ) : (
        <StyledDiv>
          Example With no Params
          <BodyComponent onChange={onChange} onClick={onClick} bodyModel={bodyModel} />
        </StyledDiv>
      )}
    </div>
  );
};
