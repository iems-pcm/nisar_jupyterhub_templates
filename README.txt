Template and static assets for customizing the JupyterHub login page to be JPL-ified (although as of 7/6/2022, 
the templates provided by JPLs designlab no longer match the JPL website.

There are two directories in this repo:
    - custom_templates - contains the login.html jinja template which replaces the out of the box JH login page. 
                         The location of this directory must be added to the JH config (jupyterhub_config.py).
    - custom_assets - contains the static assets referenced by the above template. This is a modified set of 
                      files (images, stylesheets, javascript, etc.) provided by the designlab template set. It must
                      be installed as a sub-directory of the JH static directory (which is resolved by the Jinja
                      substitution {{ static_url() }})
