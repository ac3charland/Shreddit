import React from "react";
import "./SubmitComment.css";

const SubmitComment = () => (
        <div class="row">
            <form class="col s12">
                <div class="row">
                <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea commentBox"></textarea>
                    <label for="textarea1">Comment</label>
                </div>
                </div>
            </form>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
)

export default SubmitComment;



