OpenSensors.io bridge for IOT gateways running [Snappy Ubuntu](https://developer.ubuntu.com/en/snappy/).

Please note that currently this repo contains a sensor reading demo, and not yet a complete bridge solution.

## Usage

* Update the config

Edit `src/bridge.js`

* Build the snappy

`$ snapcraft`

* Upload the snappy to a gateway

`$ snappy-remote --url=ssh://REMOTE-GATEWAY install ./osio-bridge_0.0.1_amd64.snap`

* Grant USB access to the snappy

On the remote gateway

`$ sudo snappy hw-assign osio-bridge.sideload /dev/bus/usb/00*/*`

Replace the '*' with something else

## License

Copyright © 2016 opensensors.io

Azondi is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Azondi is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Azondi.  If not, see <http://www.gnu.org/licenses/>.
