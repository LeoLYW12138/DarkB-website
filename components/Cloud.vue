<script>
import * as d3 from 'd3'
import * as cloud from 'd3-cloud'

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    fontSizeMapper: {
      type: Function,
      required: true,
    },
    onWordClick: {
      type: Function,
      default: (word) => {
        window.alert(`You clicked ${word.text}`)
      },
    },
    onWordHover: {
      type: Function,
      default: () => false,
    },
    rotate: {
      type: [Function, String, Number],
      default: 0,
    },
    font: {
      type: [String, Function],
      default: 'Serif',
    },
    width: {
      type: [Number, String],
      default: 960,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    padding: {
      type: [Number, String],
      default: 0,
    },
    spiral: {
      type: String,
      default: 'archimedean',
    },
    coloring: {
      type: String,
      default: 'random',
    },
    colors: {
      type: Array,
      default: () => null,
    },
  },
  data() {
    return {
      layout: {},
      chart: {},
      fill: null,
    }
  },

  watch: {
    data: {
      handler(val) {
        this.createCanvas()
      },
      deep: true,
    },
    rotate() {
      this.createCanvas()
    },
    font() {
      this.createCanvas()
    },
    padding() {
      this.createCanvas()
    },
    spiral() {
      this.createCanvas()
    },
    colors() {
      this.createCanvas()
    },
    coloring() {
      this.createCanvas()
    },
  },

  mounted() {
    this.createCanvas()
  },

  methods: {
    createCanvas() {
      const wordCounts = this.data.map((text) => ({ ...text }))

      d3.select(this.$el).selectAll('*').remove()

      const layout = cloud()
        .size([this.width, this.height])
        .words(wordCounts)
        .padding(this.padding)
        .spiral(this.spiral)
        .rotate(this.rotate)
        .font(this.font)
        .fontSize(this.fontSizeMapper)
        .on('end', this.end)

      if (this.colors) this.fill = d3.scaleOrdinal().range(this.colors)
      else this.fill = d3.scaleOrdinal(d3.schemeCategory10)

      layout.start()
    },
    end(words) {
      let _fill
      switch (this.coloring) {
        case 'random':
          _fill = (d, i) => this.fill(i)
          break
        case 'size':
          _fill = (d) => this.fill(d.size)
          break
        default:
          _fill = (d, i) => this.fill(i)
      }

      d3.select(this.$el)
        .append('svg')
        .attr('viewBox', '0 0 ' + this.width + ' ' + this.height)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .append('g')
        .attr('transform', `translate(${this.width / 2},${this.height / 2})`)
        .selectAll('text')
        .data(words)
        .enter()
        .append('text')
        .style('font-family', (d) => d.font)
        .style('font-size', 1)
        .style('fill', _fill)
        .attr('text-anchor', 'middle')
        .text((d) => d.text)
        .on('click', (d) => this.onWordClick(d))
        .on('mouseover', (d) => this.onWordHover(d))
        .transition()
        .duration(600)
        .style('font-size', (d) => {
          return `${d.size}px`
        })
        .attr('transform', (d) => {
          return `translate(${[d.x, d.y]})rotate(${d.rotate})`
        })
        .style('fill-opacity', 1)
    },
  },
}
</script>

<template>
  <div ref="wordCloud" class="wordCloud"></div>
</template>

