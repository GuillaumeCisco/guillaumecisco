import config from 'config';

export default `<script type="text/javascript">Raven.config('${config.apps.frontend.raven_url}').install();</script>`;
