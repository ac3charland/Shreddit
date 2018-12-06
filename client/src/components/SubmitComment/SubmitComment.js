import React, { Component } from "react";
import "./SubmitComment.css";




const submitComment = props => (
            <form>
            <div className="row">
            <div className="col s12">
                <div className="row">
                <div className="input-field col s12">
                    <input id="textarea1" className="materialize-textarea" name="body"  value={props.body}></input>
                    <label for="textarea1">Comment</label>
                </div>
                </div>
            </div>
            <button onClick={props.postComment} className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
            </div>
            </form>
        )

    

export default submitComment;

