import cn from 'classnames';
import { ImSpinner3 } from 'react-icons/im';

interface SpinnerProps {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const Spinner = ({ sm, md, lg }: SpinnerProps) => {

  const className = cn('animate-spin text-white-300 fill-white-300 mr-2', {
    'w-4 h-4': sm,
    'w-6 h-6': md,
    'w-8 h-8': lg,
  })

  return (
    <div role='status'>
      <ImSpinner3 className={className} />
      <span className='sr-only'>Chargement ...</span>
    </div>
  )
}

export default Spinner;
