import { useState } from 'react'

function Dashboard() {

  return (
    
  <><div id="myModal" className="modal">
      <div classNameName="conatiner" id="img01">
        <h1>Create Your account</h1>
        <div className="content-container">
          <form id="regForm" action="/action_page.php">

            -- One "tab" for each step in the form: -
            <div className="tab">
              <div className="textarea">
                <label for="">Email Address</label>
                <input o name="fname" />
              
                </div>
              <div className="textarea">
                <label for="">Confirm Email Address</label>
                <input placeholder="First name..." oninput="this.classNameName = ''" name="fname"/>
              </div>
              <div className="textarea">
                <label for="">Country of Residence</label>
                <input />
              </div>
              <div className="mycheckbox" >
                <input type="checkbox" className="checkbox" oninput="this.classNameName = ''" name="fname" /><p className="input_text"> I am  13 years of age or older and agree to the terms
                  of <a href="">Ghostv subcriber Agrement</a> and <a href="">Privacy policy</a>. </p>
                </div>
            </div>

            <div >
              <div >
                <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
              </div>
            </div>
            Circles which indicates the steps of the form:
            <div>

              <span className="step"></span>
              <span className="step"></span>
            </div>
          </form>

          <div className="text_p">
            <p>Join Ghost and discover thousand of gaming account for sales at you finger tip</p>

            <b>learn more</b>
          </div>
        </div>
      </div>
      <span className="close">&times;</span>
      <img className="modal-content" />
        <div id="caption"></div>
    </div><div className="bg-text">
        <button id="myImg">Sign up</button>

      </div></>
  )
}

export default Dashboard
