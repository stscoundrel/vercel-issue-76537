export default async function preview(req, res) {
  const { secret, slug, type } = req.query
  const wpSecret = process.env.WP_PREVIEW_SECRET

  // Validate request came from WP preview link.
  if (!wpSecret || wpSecret !== secret) {
    return res.status(401).json({ message: 'Invalid request - missing or incorrect secret' })
  }

  // Require slug & post type
  if (!slug || !type) {
    return res.status(401).json({ message: 'Invalid request - missing preview data' })
  }

  res.end()
}
