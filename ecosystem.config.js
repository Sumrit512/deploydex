module.exports = 
  {
    "apps" : [
       {
          "name"          : "app-nextjs",
          "script"        : "node_modules/next/dist/bin/next",
          "args"          : "start ",
          "cwd"           : "/srv/nextjsapp",
          "instances"     : 1,
          "exec_mode"     : "cluster"
       }
    ]
  }

