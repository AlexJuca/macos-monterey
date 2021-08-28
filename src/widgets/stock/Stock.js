import React from "react"
import BaseWidget from "../../components/widget/Widget"
import SpinningLoader from "../../components/spinning_loader/SpinningLoader"
import "./stock.scss"

class StockWidget extends BaseWidget {
  constructor(props) {
    super(props)
    this.state = {
      children: props.children,
      width: 198,
      height: 198,
      symbol: "AAPL",
      stock_direction: "positive",
      stock_relative_change: 0,
      stock_info_has_been_loaded: false,
      failed_to_fetch_stock_info: null,
      stock: {
        open: 147.48,
        high: 148.75,
        low: 146.83,
        current: 148.6,
        previous_close: 147.54,
        name: "Apple Inc",
      },
    }
  }

  componentDidMount() {
    this.fetchStockInformation()
  }

  fetchStockInformation() {
    fetch("https://api.lil.software/stocks?symbol=AAPL")
      .then((response) => response.json())
      .then((stock) =>
        this.setState({ stock: stock, stock_info_has_been_loaded: true })
      )
      .catch((error) => {
        this.setState({ failed_to_fetch_stock_info: true })
        console.log(error)
      })
  }

  calculateRelativeChangeInStock = () => {
    const relative_change = (
      ((this.state.stock.previous_close - this.state.stock.current) /
        this.state.stock.current) *
      100
    ).toFixed(2)

    if (relative_change < 0) {
      this.setState({
        stock_direction: "negative",
        stock_relative_change: relative_change,
      })
    } else {
      this.setState({
        stock_direction: "positive",
        stock_relative_change: relative_change,
      })
    }
  }

  render() {
    return this.build(
      this.state.stock_info_has_been_loaded ? (
        <div className="stock-widget-content">
          <h5 className="stock-symbol">{this.state.symbol}</h5>
          <p className="stock-name">{this.state.stock.name}</p>
          <h2 className="stock-price">${this.state.stock.current}</h2>
          <p className={this.state.stock_direction}>
            {this.state.stock_relative_change}%
          </p>
        </div>
      ) : this.state.failed_to_fetch_stock_info == true ? (
        <div className="loading-widget-content">
          <i className="remixicon-error-warning-line"></i>
          <p>Error fetching stock data</p>
        </div>
      ) : (
        <div className="loading-widget-content">
          <SpinningLoader></SpinningLoader>
        </div>
      )
    )
  }
}

export default StockWidget
