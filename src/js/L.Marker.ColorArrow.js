import ArrowIcon from './ArrowIcon';

L.Marker.ColorArrow = L.Marker.extend({
    options: {
        icon: ArrowIcon,
        color: 'red',
    },

    setRGBA(r, g, b, a = 1) {
        this.options.color = 'rgba('+r+','+g+','+b+','+a+')';
        this.setColor();
    },

    setHSVA(h, s = 1, v = 1, a = 1) {
        const rgb = this._HSVtoRGB(h, s, v);
        this.setRGBA(rgb.r, rgb.g, rgb.b, a);
    },

    setColor(color) {
        this._icon.style['border-bottom-color'] = this.options.color;
    },

    /**
     * Converts hsv to RGB
     * @param {number} h
     * @param {number} s
     * @param {number} v
     * @returns {Object}
     */
    _HSVtoRGB: (h, s, v) => {
        let r, g, b, i, f, p, q, t;

        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }

        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }

        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }
});

L.Marker.ColorArrow.addInitHook(function () {
    this.on('add', event => {
        this.setColor(this.options.color);
    });
});

export default L.Marker.ColorArrow;