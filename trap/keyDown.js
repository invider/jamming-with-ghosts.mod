function keyDown(e) {

    const ghost = lab.cam.focus
    if (!ghost) return

    switch(e.code) {
        case 'ArrowUp':    ghost.up(); break;
        case 'ArrowLeft':  ghost.left(); break;
        case 'ArrowDown':  ghost.down(); break;
        case 'ArrowRight': ghost.right(); break;
    }
}
