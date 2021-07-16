production:
	JEKYLL_ENV=production jekyll build
	
deploy_preview:
	JEKYLL_ENV=production jekyll build && cp netlify_headers _site/_headers