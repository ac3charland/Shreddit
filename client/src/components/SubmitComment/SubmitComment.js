import React from "react";
import "./SubmitComment.css";

const SubmitComment = () => (
        <div className="container">
            <form className="col s12">
                <div className="row">
                <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea commentBox"></textarea>
                    <label for="textarea1">Comment</label>
                    <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </div>
                </div>
            </form>
        </div>
)

export default SubmitComment;



