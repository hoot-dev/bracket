type TeamProps = {
  upper: boolean;
  left: boolean;
  team: {
    college: string;
    mascot: string;
    logo: string;
  }
};

function Team({ upper, left, team }: TeamProps) {
  const upDownPosition = upper ? 'top' : 'bottom';
  const leftRightPosition = left ? 'left' : 'right';

  return (
    <div className={`${upDownPosition} ${leftRightPosition}`}>
      <div className='teamName'>
        {`${team.college} ${team.mascot}`}
        <img className='teamLogo' src={`${team.logo}`} alt='Team Logo'/>
      </div>
      <div className='teamRecord'></div>
      <div className='teamSeed'></div>
    </div>
  );
}

export default Team;