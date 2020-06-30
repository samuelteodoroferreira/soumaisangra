import styled from 'styled-components';

export const Row = styled.div`
  background-color: ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: row;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  position: relative;
  border: ${props => props.border};
`;

export const Column = styled.div`
  background-color: ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  position: relative;
  border: ${props => props.border};
`;

export const Text = styled.p`
  font-size: ${props => props.fontSize || 14}px;
  font-weight: ${props => props.fontWeight || 600};
  color: ${props => props.color || '#515151'};
  padding: ${props => props.padding};
`;

export const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
  margin: ${props => props.margin};
  object-fit: contain;
  cursor: ${props => (props.pointer ? 'pointer' : 'default')};
`;
