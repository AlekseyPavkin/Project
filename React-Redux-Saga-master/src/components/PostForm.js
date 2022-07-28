import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/action'
import Alert from './Alert'


const PostForm = (props) => {
    const [state, setState] = React.useState({ title: '' })

    const changeInputHandler = (event) => {
        event.persist()
        setState((prev) => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(state.title)

        const { title } = state

        if (!title.trim()) {
            return props.showAlert('Название поста не может быть пустым')
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        console.log(newPost)

        props.createPost(newPost)

        setState({ title: '' })
    }
    return (
        <form onSubmit={submitHandler}>
            {props.alert && <Alert text={props.alert} />}
            <div className="form-group">
                <label htmlFor="title"></label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Заголовок поста"
                    name="title"
                    value={state.title}
                    onChange={changeInputHandler}

                />
            </div>
            <button className="btn btn-success">Создать</button>
        </form>
    )
}

const mapDispatchToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)