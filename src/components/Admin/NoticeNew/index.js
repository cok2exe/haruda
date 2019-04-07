import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  SectionTitle,
  Button,
  FormGroup,
  FormControl,
  FormTextarea
} from '@/styled-ui'

class AdminNoticeNewComponent extends Component {
  render() {
    const { title, content } = this.props.state

    const { handleChange, createNotice } = this.props
    return (
      <div className="section-admin notices-new">
        <div className="container">
          <SectionTitle>공지사항 추가</SectionTitle>
          <div className="section-btn">
            <Button className="mr10" as={Link} to="/admin/notices">
              뒤로
            </Button>
            <Button onClick={createNotice}>추가</Button>
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

export default AdminNoticeNewComponent
