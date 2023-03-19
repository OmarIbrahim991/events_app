// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	const { body, } = req
	const { email, event, } = body
	const isEmailValid = email.includes('@') && email.length > 2
	const isEventValid = event != "" && event != undefined && event != null
	res.status(200).json({ success: isEmailValid && isEventValid, email, event, })
}
