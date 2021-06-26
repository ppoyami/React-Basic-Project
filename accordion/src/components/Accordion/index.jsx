import * as A from './Accordion.style';
import { FiPlus, FiMinus } from 'react-icons/fi';

function Accordion({ children }) {
  // 전역 제공 상태 값 정의 -> 제공
  return (
    <>
      <A.Wrapper>{children}</A.Wrapper>
    </>
  );
}

export function AccordionHeader({ children, className }) {
  return <A.Header className={className}>{children}</A.Header>;
}

export function AccordionBody({ children, className }) {
  return <A.Body className={className}>{children}</A.Body>;
}

export function HeaderButton({ className }) {
  return <A.HeaderButton className={className} />;
}

export function Title({ children, className }) {
  return <A.Title className={className}>{children}</A.Title>;
}

export function BodyContent({ children, className }) {
  return <A.BodyContent className={className}>{children}</A.BodyContent>;
}

export function BodyButton({ children, className }) {
  return <A.BodyButton className={className}>{children}</A.BodyButton>;
}

export default Accordion;
