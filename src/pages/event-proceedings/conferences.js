import React from 'react'
import Layout from 'components/Layout/index'
import { Link } from 'gatsby'

const conPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Conferences</h1>
        <p>
          ASince 1983 Yale has held series of meetings to disseminate the
          Teachers Institute approach and to collaborate with school and
          university colleagues from around the United States
        </p>
        <div className="row mt-4">
          <div className="col-sm-11 left-panel">
            <ul>
              <li>
                <strong>
                  <Link to="transcripts/F14a">
                    School-College Collaboration: Preparing Teachers and
                    Curricula, 1991
                  </Link>
                </strong>
                <p>
                  In 1991 teams of teachers and administrators from educational
                  partnerships across the United States attended a conference
                  focused on the content process and products of their
                  collaborative efforts. A <Link to="">report</Link> on and{' '}
                  <Link to="transcripts/F14a.html">transcript</Link> of the
                  conference are available.
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/C16">
                    Exploring Art and Culture in the Yale-New Haven Teachers
                    Institute, 1992{' '}
                  </Link>
                </strong>
                <p>
                  A paper given by Jules D. Prown at a conference on teacher
                  programs in art museums at the National Gallery of Art,
                  Washington, D.C., on October 22-23, 1992.
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F14a">
                    A panel discussion of the Institute's publication,{' '}
                    <i>Teaching in New Haven</i>{' '}
                  </Link>
                </strong>
                <p>
                  The panel at the 1991 Conference consisted of: Thomas R.
                  Whitaker, Professor of English, Professor of Theater Studies,
                  Yale University; Peter P. Wegener, Professor Emeritus of
                  Engineering and Applied Science, Yale University; William J.
                  Derry, Drama Teacher, Comprehensive Arts Program, New Haven;
                  Lois Van Wagner, Science Teacher, East Rock School, New Haven;
                  Hermine E. Smikle, Mathematics Teacher, Roberto Clemente
                  Middle School, New Haven; and Sylia D. Ducach, Foreign
                  Language Teacher, Betsy Ross Arts Magnet School, New Haven.
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F14a">
                    Address by Fred M. Hechinger on “The University's Neglected
                    Task,” 1991
                  </Link>
                </strong>
                <p>
                  An address delivered by Fred M. Hechinger at the 1991 national
                  conference organized by the Institute and held at Yale.{' '}
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F13">
                    Yale Graduate School Education Department/ M.A.T. Program
                    Reunion, 1991
                  </Link>
                </strong>
                <p>
                  At the Reunion, Thomas R. Whitaker, Professor of English;
                  Peter P. Wegener, Professor Emeritus, Engineering and Applied
                  Science; and Robin W. Winks, Professor of History, spoke about
                  the Teachers Institute and answered questions from Yale
                  alumni.{' '}
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F11">
                    Reaching Each Student: College Faculty An “X” Factor in
                    Educational Reform? 1990
                  </Link>
                </strong>
                <p>
                  At the College Board National Forum, James R. Vivian spoke on
                  the role that members of university faculties of arts and
                  sciences, not only education faculty members, can and must
                  play in the continuing development of the nation’s school
                  teachers.{' '}
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/C2">
                    Building Integrated Teacher Education Systems Statewide,
                    1985
                  </Link>
                </strong>
                <p>
                  At the 1985 Summer Institute of the Council of Chief State
                  School Officers, James R. Vivian spoke on “School/College
                  Collaboration and Building Integrated Teacher Education
                  Systems Statewide.”
                </p>
              </li>
              <li>
                <Link to="transcripts/C2">
                  <strong>
                    Excellence in Teaching: A Common Goal, February 16-18, 1983
                  </strong>
                </Link>
                <p>
                  In 1983, before the “Nation at Risk” report, the Institute
                  organized and co-sponsored with the Council of Chief State
                  School Officers and the Carnegie Foundation for the
                  Advancement of Teaching a National Conference of Chief State
                  Officers and College and University Presidents on “Excellence
                  in Teaching: A Common Goal.” By coming to New Haven from 38
                  states the participants made this an unprecedented national
                  meeting of elementary and secondary and higher education. A
                  video and <Link to="transcripts/F4.html">transcript</Link> of
                  the video recording are available.
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OlWOeScEWs8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <ul>
                  <li>
                    <Link to="transcripts/F6.html">
                      A Panel of Chiefs and Presidents
                    </Link>
                    <p>
                      Robert MacNeil, Executive Editor of the MacNeil-Lehrer
                      Report, interviewed a panel and moderated questions at the
                      conclusion of the Conference. Panelists included: Gordon
                      M. Ambach, President, The University of the State of New
                      York, Commissioner of Education, State of New York; Norman
                      C. Francis, President, Xavier University of Louisiana; A.
                      Bartlett Giamatti, President, Yale University; Craig
                      Phillips, State Superintendent of Public Instruction,
                      State of North Carolina.{' '}
                    </p>
                  </li>
                  <li>
                    <Link to="transcripts/F5.html">A Case Study</Link>
                    <p>
                      Transcript of a panel at the National Conference, where
                      the Yale-New Haven Teachers Institute was presented as a
                      case study of how university-school collaboration can
                      strengthen teaching and improve learning in the nation’s
                      schools. Panelists included A. Bartlett Giamatti,
                      President, Yale University; Ernest L. Boyer, President,
                      The Carnegie Foundation for The Advancement of Teaching;
                      and James R. Vivian, Director, Yale-New Haven Teachers
                      Institute.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default conPage
