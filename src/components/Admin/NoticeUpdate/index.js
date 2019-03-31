import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  SectionTitle,
  Button,
  FormGroup,
  FormControl,
  FormTextarea
} from '@/styled-ui'

class AdminNoticeUpdateComponent extends Component {
  render() {
    const { title, content } = this.props.state

    const { handleChange, updateNoticeById } = this.props
    return (
      <div className="section-admin notices-update">
        <div className="container">
          <SectionTitle>공지사항 수정</SectionTitle>
          <div className="section-btn">
            <Button className="mr10" as={Link} to="/admin/notices">
              뒤로
            </Button>
            <Button onClick={updateNoticeById}>수정</Button>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <FormGroup>
                    <FormControl
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <FormGroup>
                    <FormTextarea
                      type="textarea"
                      name="content"
                      value={content}
                      onChange={handleChange}
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

export default AdminNoticeUpdateComponent
