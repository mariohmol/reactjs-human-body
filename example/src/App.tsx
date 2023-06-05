import React, { useState, VFC } from 'react';
import styled from 'styled-components';

import { BodyComponent } from './reactComponentLib';

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

const exampleParams = {
  head: { selected: true },
  leftArm: { show: false },
};

export const App: VFC = () => {
  const [params, setParams] = useState<any>();

  return (
    <div>
      <button onClick={() => setParams(exampleParams)}>Pass Params</button>
      {params ? (
        <StyledDiv>
          Showing with params {JSON.stringify(exampleParams, null, 2)}
          <BodyComponent partsInput={params} />
        </StyledDiv>
      ) : (
        <StyledDiv>
          Example With no Params
          <BodyComponent />
        </StyledDiv>
      )}
    </div>
  );
};
