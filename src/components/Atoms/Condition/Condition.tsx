import { ConditionProps } from '@/components/Atoms/Condition/types';

/** ****************************************************************
Conditional component
Renders its children only if the provided condition is true.
If the condition is false, it returns null.
@param {boolean} props.condition - Condition to evaluate for rendering
@param {ReactNode} props.children - Children to render
@returns {ReactNode|null} - Rendered children or null
********************************************************************* */

const Condition = ({
  condition,
  children,
}: ConditionProps): React.ReactNode | null => {
  if (condition) {
    return children;
  }
  return null;
};

export default Condition;
