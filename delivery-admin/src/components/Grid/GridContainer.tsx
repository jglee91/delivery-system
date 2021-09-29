import { Wrapper } from './GridContainer.styles';

interface GridContainerProps {
  columns?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const GridContainer: React.FC<GridContainerProps> = ({
  children,
  columns = 4,
  sm = 4,
  md = 4,
  lg = 4,
  xl = 4,
}) => (
  <Wrapper columns={columns} sm={sm} md={md} lg={lg} xl={xl}>
    {children}
  </Wrapper>
);

export default GridContainer;
