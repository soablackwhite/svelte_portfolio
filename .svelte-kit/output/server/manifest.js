export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.ico","fonts/.DS_Store","fonts/fatlove_font/fatlove.ttf","fonts/fatlove_font/info.txt","fonts/proxima_font/.DS_Store","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-black.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-blackit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-bold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-boldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-extrabold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-extraboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-light.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-lightit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-medium.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-mediumit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-regular.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-regularit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-semibold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-semiboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-thin.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanova-thinit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-black.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-blackit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-bold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-boldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-extrabold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-extraboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-light.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-lightit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-medium.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-mediumit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-regular.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-regularit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-semibold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-semiboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-thin.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovacond-thinit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-black.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-blackit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-bold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-boldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-extrabold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-extraboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-light.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-lightit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-medium.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-mediumit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-regular.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-regularit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-semibold.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-semiboldit.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-thin.otf","fonts/proxima_font/Demo_Fonts/Fontspring-DEMO-proximanovaexcn-thinit.otf","fonts/proxima_font/References/proximanovafullspecimen.pdf","fonts/proxima_font/References/proximanovaoverview.pdf","fonts/proxima_font/References/proximanovasupplementguide.pdf","fonts/proxima_font/References/proximanovausagenotes.pdf","fonts/proximanova.otf","media/.DS_Store","media/animated/.DS_Store","media/animated/art_docu.mp4","media/animated/art_docu2.mp4","media/animated/art_docu3.mp4","media/animated/bio.png","media/animated/bio.svg","media/animated/bio_animation.mp4","media/animated/card.mp4","media/animated/cook.mp4","media/animated/cook.svg","media/animated/cube.mp4","media/animated/cubefall.mp4","media/animated/fkwlqj.mp4","media/animated/full.mp4","media/animated/fwkljq.mp4","media/animated/gemstone.mp4","media/animated/graduate.mp4","media/animated/legible.mp4","media/animated/loop.mp4","media/animated/loopASCII.mp4","media/animated/mistborn.gif","media/animated/neonTunnel.gif","media/animated/osgif.webp","media/animated/postcARds.mp4","media/animated/povinclusive.mp4","media/animated/reading.svg","media/animated/rps.mov","media/animated/runner.mp4","media/animated/runner.svg","media/animated/simple.mp4","media/animated/single90.mp4","media/animated/source.mov","media/animated/teacher.svg","media/icons/.DS_Store","media/icons/abudhabi.svg","media/icons/bluetipdesign_left.svg","media/icons/bluetipdesign_right.svg","media/icons/bocconi.svg","media/icons/bootstrap.svg","media/icons/c.svg","media/icons/clear.svg","media/icons/cplus.svg","media/icons/csharp.svg","media/icons/css3.svg","media/icons/designBubbleIdea1.svg","media/icons/directions.svg","media/icons/django.svg","media/icons/drawing.svg","media/icons/email.svg","media/icons/favIcon2.ico","media/icons/favicon.ico","media/icons/favicon.png","media/icons/flask.svg","media/icons/github.svg","media/icons/html5.svg","media/icons/icon.svg","media/icons/iconRound.svg","media/icons/iconRound2.svg","media/icons/italy.svg","media/icons/italyflag.svg","media/icons/js.svg","media/icons/leo.svg","media/icons/linkedin.svg","media/icons/logo.svg","media/icons/logo2.svg","media/icons/logo_customize.svg.2024_04_14_15_30_54.0.svg","media/icons/logosimple.svg","media/icons/mail.svg","media/icons/male.png","media/icons/male.svg","media/icons/manbaa.svg","media/icons/menu.svg","media/icons/mor.svg","media/icons/mor_regular.svg","media/icons/morocco.svg","media/icons/nodejs.svg","media/icons/nyc.svg","media/icons/nyu.svg","media/icons/nyuad.svg","media/icons/python.svg","media/icons/r.svg","media/icons/react.svg","media/icons/scrollmore.svg","media/icons/settings.svg","media/icons/sql.svg","media/icons/stata.svg","media/icons/svelte.svg","media/icons/twitter.svg","media/icons/uae.svg","media/icons/uaeflag.svg","media/icons/ukflag.svg","media/icons/ukmap.svg","media/icons/usaflag.svg","media/icons/white.svg","media/thumbnails/.DS_Store","media/thumbnails/algorave.webp","media/thumbnails/comic copy.png","media/thumbnails/comic.png","media/thumbnails/comic1c.png","media/thumbnails/comic_doc.png","media/thumbnails/fdjsk.png","media/thumbnails/fkjwl.png","media/thumbnails/fwq.png","media/thumbnails/gemstone.webp","media/thumbnails/gs.png","media/thumbnails/jfkwql.png","media/thumbnails/madsocks.webp","media/thumbnails/mistborn.png","media/thumbnails/ms.png","media/thumbnails/neonTunnel.gif","media/thumbnails/ogs/.DS_Store","media/thumbnails/ogs/algorave.png","media/thumbnails/ogs/gemstone.png","media/thumbnails/ogs/madsocks.png","media/thumbnails/ogs/rps.png","media/thumbnails/ogs/tunnel.png","media/thumbnails/reccie.webp","media/thumbnails/rps.webp","media/thumbnails/switch.png","media/thumbnails/tunnel.webp","style/style.css","style/style_invert.css","style/style_og.css"]),
	mimeTypes: {".ttf":"font/ttf",".txt":"text/plain",".otf":"font/otf",".pdf":"application/pdf",".mp4":"video/mp4",".png":"image/png",".svg":"image/svg+xml",".gif":"image/gif",".webp":"image/webp",".mov":"video/quicktime",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.A57XTMpU.js","app":"_app/immutable/entry/app.BzDdL3Sm.js","imports":["_app/immutable/entry/start.A57XTMpU.js","_app/immutable/chunks/entry.nGIRD-nH.js","_app/immutable/chunks/scheduler.B3MMMELT.js","_app/immutable/chunks/index.DyAv960Q.js","_app/immutable/entry/app.BzDdL3Sm.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.B3MMMELT.js","_app/immutable/chunks/index.vM1bySNN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
