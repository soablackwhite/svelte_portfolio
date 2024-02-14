export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","favicon.ico","fonts/.DS_Store","fonts/fatlove_font/fatlove.ttf","fonts/fatlove_font/info.txt","fonts/proxima_font/.DS_Store","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-black.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-blackit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-bold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-boldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-extrabold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-extraboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-light.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-lightit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-medium.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-mediumit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-regular.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-regularit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-semibold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-semiboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-thin.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-thinit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-black.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-blackit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-bold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-boldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-extrabold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-extraboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-light.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-lightit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-medium.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-mediumit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-regular.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-regularit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-semibold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-semiboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-thin.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-thinit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-black.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-blackit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-bold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-boldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-extrabold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-extraboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-light.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-lightit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-medium.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-mediumit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-regular.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-regularit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-semibold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-semiboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-thin.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-thinit.otf","fonts/proxima_font/References/proximanovafullspecimen.pdf","fonts/proxima_font/References/proximanovaoverview.pdf","fonts/proxima_font/References/proximanovasupplementguide.pdf","fonts/proxima_font/References/proximanovausagenotes.pdf","fonts/proximanova.otf","media/.DS_Store","media/animated/art.mp4","media/animated/cube.mp4","media/animated/fkwlqj.mp4","media/animated/full.mp4","media/animated/fwkljq.mp4","media/animated/gemstone.mp4","media/animated/genuary.mp4","media/animated/invert.mp4","media/animated/legible.mp4","media/animated/loopASCII.mp4","media/animated/mistborn.gif","media/animated/neonTunnel.gif","media/animated/osgif.webp","media/animated/postcARds.mp4","media/animated/rps.mov","media/animated/source.mov","media/icons/.DS_Store","media/icons/boot.svg","media/icons/bootstrap.svg","media/icons/c.svg","media/icons/cplus.svg","media/icons/csharp.svg","media/icons/css3.svg","media/icons/django.svg","media/icons/drawing.svg","media/icons/email.svg","media/icons/favicon.ico","media/icons/favicon.png","media/icons/flask.svg","media/icons/github.svg","media/icons/html5.svg","media/icons/icon.svg","media/icons/iconRound.svg","media/icons/js.svg","media/icons/linkedin.svg","media/icons/logo.svg","media/icons/mail.svg","media/icons/nodejs.svg","media/icons/python.svg","media/icons/r.svg","media/icons/sql.svg","media/icons/stata.svg","media/icons/twitter.svg","media/icons/white.svg","media/thumbnails/.DS_Store","media/thumbnails/algorave.png","media/thumbnails/comic.png","media/thumbnails/comic1c.png","media/thumbnails/fdjsk.png","media/thumbnails/fkjwl.png","media/thumbnails/gemstone.png","media/thumbnails/gs.png","media/thumbnails/jfkwql.png","media/thumbnails/madsocks.png","media/thumbnails/mistborn.png","media/thumbnails/ms.png","media/thumbnails/neonTunnel.gif","media/thumbnails/rps.png","media/thumbnails/switch.png","media/thumbnails/tissue.png","media/thumbnails/tunnel.png","style/style.css","style/style_invert.css"]),
	mimeTypes: {".ttf":"font/ttf",".txt":"text/plain",".otf":"font/otf",".pdf":"application/pdf",".mp4":"video/mp4",".gif":"image/gif",".webp":"image/webp",".mov":"video/quicktime",".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dm1cbgm2.js","app":"_app/immutable/entry/app.KDlnZXu7.js","imports":["_app/immutable/entry/start.Dm1cbgm2.js","_app/immutable/chunks/entry.Vn3wBM7d.js","_app/immutable/chunks/scheduler.pRsUaojv.js","_app/immutable/chunks/index.gpARhjws.js","_app/immutable/entry/app.KDlnZXu7.js","_app/immutable/chunks/scheduler.pRsUaojv.js","_app/immutable/chunks/index.LtzutoOz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
