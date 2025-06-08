/* eslint-disable */

import React from 'react'

const ErrorText = ({ errors, name }: { errors: any, name: string }) => {
  const error = errors?.[name];
  return error && error.message ? (
    <span className='text-sm text-danger'>{error.message}</span>
  ) : null;
}

export default ErrorText
