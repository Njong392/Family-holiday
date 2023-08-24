const NonVerified = ({isNotVerified}) => {
  return (
    <div className={!isNotVerified ? "hidden" : "block"}>
        <p className="bg-lightred text-deepgray  rounded-lg px-3 py-2 border-2 border-red">Whoops! To perform this action, please verify your email, or login/signup. Check your email (probably spam and bin) for verification link.</p>
    </div>
  )
}

export default NonVerified