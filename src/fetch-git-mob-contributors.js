import React from 'react';

function ContributorProfile({ total, avatar, username }) {
  return (<div data-testid="contributor" className="contributor">
    <div className="profile">
      <img src={avatar} width="60px" />
      <p>{username}</p>
    </div>
    <div className="total">
      <p className="number">{total}</p>
      commits
    </div>
  </div>);
}

ContributorProfile.defaultProps = {
  total: 0,
  avatar: 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif',
  username: 'unknown'
};


export class FetchGitMobContributors extends React.Component {
  constructor() {
    super();
    this.state = {
      contributorList: []
    };
  }

  fetchContributors = () => {
    fetch(`https://api.github.com/repos/findmypast-oss/git-mob/stats/contributors`)
      .then((data) => data.json())
      .then((data) => data.map(({ total, author }) => ({
        total: total,
        username: author.login,
        avatar: author.avatar_url,
        id: author.id
      })))
      .then((contributorList) => {
        this.setState({
          contributorList
        });
      });
  }

  handleClick = () => {
    this.fetchContributors();
  }

  render() {
    const { contributorList } = this.state;
    return (
      <div>
        <button data-testid="fetch-button" onClick={this.handleClick}>Fetch Git Mob contributors</button>
        <div data-testid="contributors" className="contributors">
          {contributorList.map((contributor) => {
            return <ContributorProfile key={contributor.id} {...contributor} />
          })}
        </div>
      </div>
    )
  }
}