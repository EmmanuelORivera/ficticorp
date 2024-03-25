import React from 'react'
import { Button } from '../ui/button'

const FormHeader = ({
  disabled,
  renderHeader,
  renderButtonBody,
}: {
  disabled: boolean
  renderHeader: () => JSX.Element
  renderButtonBody: () => JSX.Element
}) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-medium flex items-center gap-4">
        {renderHeader()}
      </h2>
      <Button variant={'outline'} type="submit" disabled={disabled}>
        {renderButtonBody()}
      </Button>
    </div>
  )
}

export default FormHeader
