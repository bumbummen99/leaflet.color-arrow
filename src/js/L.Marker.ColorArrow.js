import ArrowIcon from './ArrowIcon';

L.Marker.ColorArrow = L.Marker.extend({
    options: {
        icon: ArrowIcon,
        color: 'red',
    },

    /**
     * Sets the marker color to the given RGBA color.
     * @param {number} r Red value (0-255)
     * @param {number} g Green value (0-255)
     * @param {number} b Blue value (0-255)
     * @param {number} a Alpha value (0-255)
     */
    setRGBA(r, g, b, a = 255) {
        const rgbaToHex = (r, g, b, a = 255) => {
            r = r.toString(16);
            g = g.toString(16);
            b = b.toString(16);
            a = a.toString(16);
          
            if (r.length == 1)
              r = "0" + r;
            if (g.length == 1)
              g = "0" + g;
            if (b.length == 1)
              b = "0" + b;
            if (a.length == 1)
                a = "0" + a;
          
            return "#" + r + g + b + a;
        };

        this.setColor(rgbaToHex(r, g, b, a));
    },

    /**
     * Sets the marker color to the given HSVA color
     * @param {number} h Hue value (0-1)
     * @param {number} s Saturation value (0-1)
     * @param {number} v Value value (0-1)
     * @param {number} a Alpha value (0-1)
     */
    setHSVA(h, s = 1, v = 1, a = 1) {
        const hsvToRgb = (h, s, v) => {
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
        };

        const rgb = hsvToRgb(h, s, v);
        this.setRGBA(rgb.r, rgb.g, rgb.b, Math.round(255 * a));
    },

    /**
     * Sets the marker color to the given CSS color.
     * @param {string} color 
     */
    setColor(color) {
        /* Update color in options */
        this.options.color = color;

        /* Update color in css */
        if (this._icon) {
            this._icon.style['border-bottom-color'] = this.options.color;
        }
    },

    /**
     * Returns the current color.
     * @returns {string}
     */
    getColor() {
        return this.options.color;
    }
});

L.Marker.ColorArrow.addInitHook(function () {
    /* Set initial marker color on add since the icon does only exist then */
    this.on('add', event => {
        this.setColor(this.options.color);
    });
});

export default L.Marker.ColorArrow;