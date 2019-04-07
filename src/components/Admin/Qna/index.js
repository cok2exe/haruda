import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, Button, FormGroup, FormTextarea } from '@/styled-ui'

class AdminQnaComponent extends Component {
  render() {
    const { qna } = this.props.state

    const { handleChangeAnswer, createAnswer } = this.props
    return (
      <div className="section-admin notices-update">
        <div className="container">
          <SectionTitle>QnA 상세</SectionTitle>
          <div className="section-btn">
            <Button className="mr10" as={Link} to="/admin/qnas">
              뒤로
            </Button>
            <Button onClick={createAnswer}>답변 등록</Button>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>질문</th>
                <td>{qna.title}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{qna.User.email}</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>{qna.User.name}</td>
              </tr>
              <tr>
                <th>답변</th>
                <td>
                  <FormGroup>
                    <FormTextarea
                      type="textarea"
                      value={qna.answer || ''}
                      onChange={handleChangeAnswer}
                    />
                  </FormGroup>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default AdminQnaComponent
