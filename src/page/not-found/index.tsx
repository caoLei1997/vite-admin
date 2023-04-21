import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="页面不存在"
        extra={
          <Button type="primary" onClick={goHome}>
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
